# Quarks - A Movie Review Project

## Troubleshooting

- Use useReducer with useContext: I use this combination a lot on my react projects, but I usually had issues to initialize the useReducer methods on the Context, but then I finally found out how to make this with easy. In [this line](https://github.com/igormcsouza/quarks/blob/d5a9ed83e8e30029915371cb490734328aa23a26/frontend/src/store/Context.tsx#L9) I used an empty object as ContextProps, that resolves for ever the typescript error (This might be an empty guy)! 
