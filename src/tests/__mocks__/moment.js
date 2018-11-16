// Mock is a method/object that simulates 
// the behavior of a real method/object in 
// controlled ways. Mock objects are used in 
// unit testing. Often a method under a test
// calls other external services or methods 
// within it. These are called dependencies.
// Once mocked, the dependencies behave the
// way we defined them.

// Mocking is primarily used in unit testing. 
// An object under test may have dependencies
// on other (complex) objects. To isolate the 
// behavior of the object you want to replace
// the other objects by mocks that simulate 
// the behavior of the real objects. This is
// useful if the real objects are impractical
// to incorporate into the unit test.

//import moment from 'moment'
const moment = require.requireActual('moment');     // importing actual moment library

export default (timestamp = 0) => {
    return moment(timestamp);
};