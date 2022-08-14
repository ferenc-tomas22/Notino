# Homework

Here is sample code that is not by far ideal.

1. Refactor code to production-grade quality.
2. Find and describe bugs and issues.
3. Add styling by your choice. (You can add styling library)
4. Demonstrate connection to backend API.
5. Add Todo detail page (add routing to app, use context api for state management from fetch todos to render todos and detail)
6. Todo component has defined shouldComponentUpdate lifecycle, but it can be done better, adjust it
7. Optional: rewrite Todo component to FC (choose if you want, prepare explanation)

---------------------------------------------------------------------------------------

1. ✔
2.  • App.tsx - useEffect function is written wrong, missing empty dependency array just for first load call
      - var is not good option for making variables,
        always use const except when you need to rewrite variable use let
      - setting state is wrong, every time setState is called, fnc is re-rendering, no for loop is needed,
        just get data and set it to state one time
      - mapping todo => missing uniq key
    • Todo.tsx - for location moving, it is better to use react-router-dom, useNavigate() fnc is for navigation.
3. ✔ Used simple bootstrap.min.css
4. ✔ I did GET API in dropbox for show case, url for API is in .env, in Home.tsx is used for fetching data
5. ✔ AppContext.tsx is holding todo data, every component is using context data
6. ✔ You can use useMemo for caching component, and check if prev data !== next data,
  render will be triggered just if data is different.
  Better to use some state management library like zustand, bcs of shallow check {} / [].
  It can not be checked {} === {} / [] === [], reference is always different
7. ✔ I did it in FC, I don't do class base components.