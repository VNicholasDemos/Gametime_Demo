This coding challenge is interesting but a lot of the things I'm about to implement offend my sense of professionalism- if I were going to do this the way I'd prefer it would take substantially longer than the time granted. So I'm going to do it the fast and messy way, and make notes about what I would do differently here in order to satisfy my conscience.

# The query
Typically I would not use Axios here. I'd prefer Apollo both for the caching, the ability to automatically handle skip cases, errors, and validation of passed parameters, and for the ability to more conveniently intercept and mock queries during integration testing. However Apollo requires a lot of configuration so I'm going to blast through this with a very basic query and assume that we don't need any error handling (yikes). In an actual scenario I'd want to determine what the UX designer would want done in the event of a null or errored return here. As it is, I am simply returning an empty array.

# The architecture
As a rule I really prefer working with Typescript anymore- once you get used to it, the ability to get intellisense completion for the typings of any queries or components you are working with is just totally invaluable. Again it's kind of a pain to configure so I will go with a pure javascript component here.

I've also built this for the complete separation of the data and display components. This keeps the mocking concerns at one level for unit testing. Usually what I would do to provide data to the lower components would be to wrap them in a context provider. Here, you have a redux architecture, which I'm familiar with but which seems like overkill for this particular project. I've simply passed the results down as a prop- you will get a rerender with each key input and query, which I would normally solve with a debounce, but it's a demo project so *shrug*. Also The display components would usually be built for use within a component library and would be far more robust than the pieces I'm knocking together here.

# Test coverage
I don't really consider any component or query finished until it has unit test coverage for any internal logic, and integration test coverage for user stories and other GWT's. I'm forgoing the tests here entirely.

# Styling
I'd prefer to use emotion or some other themed styling here so I wasn't defining text styles and spacing at the individual component level. I'd also focus more on flexibility- my solution should flex down to about 500px but if you were doing this for mobile you would want that input not to be fixed, and you'd want your results display to be scrollable at a minimum. I'd probably also talk to a UX person about setting some fixed-width breakpoints for the results container- I dislike all the layout shifting that is happening with different result sets.

# Error handling
it'd be nice to have a fallback image for broken image links- for example, https://images.gametime.co/cbsoak/hero@4x.jpg returns access denied. I'm using alt-text to display *something* but I did not do any error handling for this.
 
# Input
I really like react-hook-form and react-aria for form components and state management of inputs. I would also debounce the onChange function so individual key-ins did not trigger the query.

# Documentation
I'd usually document the expected props, typical use of a component, expected output, and so on. I really like Storybook as a library for showing individual display components in an easy to consume format for project managers but it's also very helpful for documenting edge case behaviors.