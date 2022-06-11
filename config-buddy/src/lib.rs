pub mod config;

// Object that represents a full configuration over a single repository and its local remote
struct Repository();

// A descriptor pointing to a file with additional info on how should the file be interpreted
struct File();

// A context dependant entry in a configuration.
struct Entry();

// Self sufficient descriptor for all changes in an entry
struct Change();

// Collection of changes
struct Changes();

struct AppState();

struct Error();

fn pull(repo: &mut Repository) -> Result<(), Error> {
    unimplemented!()
}

fn push(repo: &mut Repository) -> Result<(), Error> {
    unimplemented!()
}

fn stash_local(repo: &mut Repository) -> Result<(), Error>{
    unimplemented!()
}

fn commit(repo: &mut Repository) -> Result<(), Error> {
    unimplemented!()
}

fn parse_changes(file: File) -> Result<Changes, Error> {
    unimplemented!()
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
