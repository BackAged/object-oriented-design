// One should depend upon abstractions, not concretions.
// loose coupling

interface ILogger {
    log(toBeLogged:string): void
}


interface ISomeRepo<T> {
    getUserByID(id: string): T
}

interface ISomeUseCase<T> {
    getUser(id: string): T
}

interface Imodel {
    id: string;
    name: string;
    age: number;
}

class SomeRepoImpl implements ISomeRepo<Imodel> {
    getUserByID(id: string): Imodel {
        return {
            id: id,
            name: "shahin",
            age: 256,
        }
    }
}

class SomeUseCase implements ISomeUseCase<Imodel> {
    private _logger: ILogger; // depends on abstraction, not the implementation
    private _repo: ISomeRepo<Imodel>;

    constructor(logger: ILogger, repo: ISomeRepo<Imodel>) {
        this._logger = logger;
        this._repo = repo;
    }

    getUser(id: string) {
        this._logger.log("UseCase: getting user by id")
        return this._repo.getUserByID(id)
    }

}