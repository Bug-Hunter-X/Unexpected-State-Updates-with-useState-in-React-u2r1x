# Unexpected State Updates with useState in React

This repository demonstrates an uncommon bug related to how React's `useState` hook handles multiple state updates within a single event handler. When `setCount` is called twice in quick succession, the second update may overwrite the first, leading to an unexpected final state.

## Bug Description

The `bug.js` file contains a React component that increments a counter. However, due to the way state updates are batched in React, calling `setCount` twice in a row within the `handleClick` function results in the second update overwriting the first.  This means the counter increments only by 1 instead of the expected 2.

## Solution

The solution demonstrates how to correctly handle multiple state updates. The key is to leverage the functional update pattern of `useState` to ensure state updates are based on the previous state and not potentially outdated values.
