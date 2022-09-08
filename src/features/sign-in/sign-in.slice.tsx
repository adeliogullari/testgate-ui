import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const signInUser = createAsyncThunk(
    'users/signInUser',
    async(signInUserRequestBody, thunkAPI) => {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(signInUserRequestBody)
        })
        if (response.status === 200) {
            return thunkAPI.fulfillWithValue((await response.json()))
        }
        return thunkAPI.rejectWithValue((await response.json()))
    }
)

interface SignInUserState {
    email: string,
    password: string,
    token: string,
    isRemember: boolean,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string
}

const SignInUserInitialState = {
    email: "",
    password: "",
    token: "",
    isRemember: false,
    loading: 'idle',
    error: ""
} as SignInUserState

export const signInSlice = createSlice({
    name: 'signIn',
    initialState: SignInUserInitialState,
    reducers: {
        updateEmail: (state, action) => {
            state.email = action.payload;
        },
        updatePassword: (state, action) => {
            state.password = action.payload;
        },
        updateToken: (state, action) => {
            state.token = action.payload;
        },
        updateIsRemember: (state, action) => {
            state.isRemember = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signInUser.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.token = "action.payload.token";
        })
        builder.addCase(signInUser.pending, (state, action) => {
            state.loading = 'pending';
        })
        builder.addCase(signInUser.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = "action.payload.message";
        })
    }
})

export const {updateEmail, updatePassword, updateToken, updateIsRemember} = signInSlice.actions

export default signInSlice.reducer

interface MyKnownError {
    errorMessage: string
    // ...
}
interface UserAttributes {
    id: string
    first_name: string
    last_name: string
    email: string
}

// const updateUser = createAsyncThunk<
//     // Return type of the payload creator
//     MyData,
//     // First argument to the payload creator
//     UserAttributes,
//     // Types for ThunkAPI
//     {
//         extra: {
//             jwt: string
//         }
//         rejectValue: MyKnownError
//     }
//     >('users/update', async (user, thunkApi) => {
//     const { id, ...userData } = user
//     const response = await fetch(`https://reqres.in/api/users/${id}`, {
//         method: 'PUT',
//         headers: {
//             Authorization: `Bearer ${thunkApi.extra.jwt}`,
//         },
//         body: JSON.stringify(userData),
//     })
//     if (response.status === 400) {
//         // Return the known error for future handling
//         return thunkApi.rejectWithValue((await response.json()) as MyKnownError)
//     }
//     return (await response.json()) as MyData
// })