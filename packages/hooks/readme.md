# @typed/hooks 

A self-organizing event-based hooks implementation built using [`@typed/effects`](./effects) to decouple 
managing state from any framework in a way that you can still test. 

Through hooking into the event's exposed by our environment type `HooksManagerEnv`, one can build many unique reactive abstractions. 
For example [`@typed/render`](./render) uses this system to provide a self-patching render tree and [`@typed/html`](./html) which does 
quite the same with our own custom virtual-dom that's effect-aware.
