import { createSlice } from "@reduxjs/toolkit";

const list = [
  {
    id: 0,
    description: 'Bug in main component',
    resolved: false,
  },
  {
    id: 1,
    description: 'Bug in store component',
    resolved: false,
  },
  {
    id: 2,
    description: 'Bug in navbar component',
    resolved: false,
  },
  {
    id: 3,
    description: 'Bug in users component',
    resolved: false,
  },
  {
    id: 4,
    description: 'Bug in table component',
    resolved: false,
  },
]


const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: list,
    loading: false,
    lastFetch: null
  },
  reducers: {
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.list.findIndex(bug => bug.id === bugId);
      bugs.list[index].userId = userId;
    },

    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++bugs.list.length,
        description: action.payload.description,
        resolved: false,
      })
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex(bug => bug.id === action.payload.bugId);
      bugs.list[index].resolved = !bugs.list[index].resolved;
    },
    
    setIsLoading: (bugs, action) => {
      bugs.loading = action.payload.loading;
    }
  }
});

export const { bugAssignedToUser, bugAdded, bugResolved, setIsLoading } = slice.actions;
export default slice.reducer;