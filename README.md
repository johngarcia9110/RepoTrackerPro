# RepoTrackerPro (GitHub Release Monitor) 
A tool that allows the user to keep track of new releases for a set of repos

##  Starting the app

- run `yarn install`
- run `yarn start` The application will automatically open in your browser.

## Running Tests
Tests have been created using the prepacked jest library that comes along with Create-React-App. Due to time constraints, I chose one function to illustrate how I would create tests that require a mocked API response.
- run `yarn test` to start the tests.

## User Stories

### MVP User Stories:
- Users can add GitHub repos they want to keep track of.
- Users can see the last release date associated with each repo.
- Users can mark a release as seen.
    - Releases are automatically marked as seen when the user clicks the "View Release Notes" button.
- There is a visual indicator for repositories with new releases since they were last marked as seen.
    - A "NEW" tag is added to repos that have not yet been seen. Unseen repos also show up in a separate list.
- There is a way to reload release data for all repos (e.g. by refreshing the app).
    - The list of repos gets updated on page refresh.
    
### Additional User Stories:
- Loading states
    - On initial load/update of repos, a loading indicator will display.
    - On search, the search button displays a loading indicator.
- Categorization
    - UI has 2 sections, one for repos that have not been seen yet and another for all repos in the user's list. (NOTE: This UI is not optimal but due to time constraints I stuck with it.)
- Additional Data
    - Repos show the profile avatar of the author (Given more time, I think it would be nice to have release notes/summary display here as well).

## Other Considerations
Due to the timed nature of this task, some things were omitted or not as optimized as I would like. Below is a list of items that I would take care of in the future if provided more time.

### Meta Data
- Header metadata (favicon, description, etc) are all left as the boilerplate code from Create-React-App.

### Tests 
- Only one test was completed in this repo, ideally all key functions would have tests.
- Storybook is a great library that serves as a source of truth for the FE dev and designer(s). I would add this in the future.

### Accessibility
- No considerations to accessibility were made during the creation of this app. This would be required before shipping.

### Styling
- The app is not mobile-friendly but could be with a small amount of adjustments. 
- The app is understyled.
