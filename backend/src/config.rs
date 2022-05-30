use std::path::{Path, PathBuf};
use crate::config::ConfigBuildError::IncompleteSpec;

pub struct Configuration {
    pub repo_path: PathBuf
}

pub enum ConfigBuildError {
    IncompleteSpec(String)
}

pub trait BuildConfig {
    fn build(self) -> Result<Configuration, ConfigBuildError>;
    fn repo_path(self, path: impl Into<PathBuf>) -> Self;
}

pub fn get_config_builder() -> impl BuildConfig {
    ConfigurationBuilder::new()
}

struct ConfigurationBuilder {
    pub repo_path: Option<PathBuf>
}

impl ConfigurationBuilder {
    pub fn new() -> Self {
        ConfigurationBuilder {
            repo_path: None,
        }
    }
}

impl BuildConfig for ConfigurationBuilder {
    fn build(self) -> Result<Configuration, ConfigBuildError> {
        let repo_path: PathBuf = self.repo_path.ok_or(IncompleteSpec(format!("Missing path to the repo!")))?;

        Ok(Configuration {
            repo_path
        })
    }

    fn repo_path(mut self, path: impl Into<PathBuf>) -> Self {
        self.repo_path = Some(path.into());
        self
    }
}
