[Changes since {PREVIOUS_VERSION}](https://github.com/realm/realm-studio/compare/{PREVIOUS_VERSION}...{CURRENT_VERSION})

This version of Studio changes how Realm state and file size metrics (displayed in the server administration window) are fetched from the server. The server must be at least version 3.16.0 to fetch these correctly.

## Enhancements
- None

## Fixed
- Fixed missing padding in the Realm browsers sidebar when a schema was missing ([#1026](https://github.com/realm/realm-studio/pull/1026))
- Fixed displaying Realm state and file size in the server administration window. ([#1027](https://github.com/realm/realm-studio/pull/1027))

## Internals
- Excluding the unpackaged directories when uploading to S3 (again). ([#1013](https://github.com/realm/realm-studio/pull/1013))
