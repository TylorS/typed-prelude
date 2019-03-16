declare module 'nsfw' {
  namespace nsfw {
    export type CreatedEvent = { action: 0, directory: string, file: string }
    export type DeletedEvent = { action: 1, directory: string, file: string }
    export type ModifiedEvent = { action: 2, directory: string, file: string }
    export type RenamedEvent = { action: 3, directory: string, oldFile: string; newDirectory: string, newFile: string }

    export type Event = CreatedEvent | DeletedEvent | ModifiedEvent | RenamedEvent

    export type Watcher = { start(): Promise<void>, stop(): void  }

    export type Options = { debounceMS?: number, errorCallback?: (errors: Error[]) => void }
  }

  const nsfw: (dir: string, events: (events: nsfw.Event[]) => void, options?: nsfw.Options) => Promise<nsfw.Watcher>

  export = nsfw
}
