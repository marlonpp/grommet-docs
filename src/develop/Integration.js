// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Box = require('grommet/components/Box');
var DocsArticle = require('../DocsArticle');
var A11y = require('../utils/a11y');

var Integration = React.createClass({
  componentDidMount: function () {
    A11y.updatePageTitle('Integration');
  },

  render: function () {
    return (
      <DocsArticle title="Integration" colorIndex="neutral-4">
        <Box id="integration">
          <p>
            Grommet's modular design enables you to use the parts of Grommet
            applicable to your application.  There are several ways you can
            benefit from using Grommet based on the needs of your users and
            your application.  The options range from referencing the style
            guide and its basic elements to complete adoption of the platform.
          </p>

          <h3>Style Guide</h3>
          <p>
            Your team references the <a data-to="design">Grommet style guide</a> with
            an emphasis on brand alignment, primarily around the logo, font,
            and color palette.  If your application is not in a position to
            begin adopting a new platform, this option may be the most
            appropriate option.
            You may find the <a href="https://github.com/grommet/grommet/tree/master/src/scss/grommet-core" target="_blank">Grommet CSS</a> elements
            a useful reference.
          </p>

          <h3>Style Sheets</h3>
          <p>
            Your application uses the <a href="https://github.com/grommet/grommet/tree/master/src/scss/grommet-core" target="_blank">Grommet CSS</a> elements
            to ensure styling of components is aligned.  Your application's
            DOM structure will likely need to change to align with the DOM
            structure expected by the Grommet CSS.
          </p>

          <h3>Components</h3>
          <p>
            Your application leverages the <a data-to="develop_app">Grommet components</a> with
            the accompanying markup, styling, and images.
            This model is appropriate in several situations:
          </p>
          <ul>
            <li>
              Your application is new or is being refactored to use
              the Grommet components.
            </li>
            <li>
              Your application uses AngularJS and you want to use Grommet
              components for the "view" in your MVC architecture.
            </li>
            <li>
              Your application is being updated to use Grommet components
              in replacing portions of the user interface based on legacy
              technologies such as Adobe Flex or Java Applets.
            </li>
          </ul>
          <h3>Application</h3>
          <p>
            Your application is new or is being rewritten to use the Grommet
            components and a set of common services for features as search,
            associations, and dashboards.
          </p>
        </Box>
      </DocsArticle>
    );
  }
});

module.exports = Integration;
