import {createSelector, createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    students: []
}

export const studentSlice = createSlice({
    name : 'student',
    initialState,
    //reducers is the object , they will directly communicate with store 
    reducers:{
        //first give its name , then pass state to it so that we will get to know what is current state right now in store, another thing we need to pass is the action , in which we can send type and payload 
        addStudent :(state , action)=>{            
            const student = {
                id : nanoid(),
                name : action.payload.name,
                age : action.payload.age,
                email : action.payload.email,
                bio : action.payload.bio,
                major : action.payload.major,
                gender : action.payload.gender,
            }
            
            state.students.push(student)
        },
        removeStudent : (state, action) => {
            state.students = state.students.filter((student)=>{
                student.id != action.payload
            })
        }

    }
})

export const {addStudent, removeStudent} = studentSlice.actions

export default studentSlice.reducer;
