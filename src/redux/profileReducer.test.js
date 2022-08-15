import profileReducer, { addPostActionCreator, deletePostActionCreator } from "./profileReducer";
import React from "react";

test('new post should be added', () => {

  let action = addPostActionCreator('new post text')
  
  let state = {
    postsData: [
      { message: 'Hi, my freind', like: 14 },
      { message: "It's my first post", like: 17 }
    ]
  }

  let newState = profileReducer(state, action)

  expect(newState.postsData.length).toBe(3)
})

test('post text should be correct', () => {

  let action = addPostActionCreator('new post text')
  
  let state = {
    postsData: [
      { message: 'Hi, my freind', like: 14 },
      { message: "It's my first post", like: 17 }
    ]
  }

  let newState = profileReducer(state, action)

  expect(newState.postsData[2].message).toBe('new post text')
})

test('post array should be decremented', () => {

  let action = deletePostActionCreator(2)
  
  let state = {
    postsData: [
      { id: 1, message: 'Hi, my freind', like: 14 },
      { id: 2, message: "It's my first post", like: 17 }
    ]
  }

  let newState = profileReducer(state, action)

  expect(newState.postsData.length).toBe(1) 
})