// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var FormField = require('grommet/components/FormField');
var CheckBox = require('grommet/components/CheckBox');
var RadioButton = require('grommet/components/RadioButton');
var NumberInput = require('grommet/components/NumberInput');
var SearchInput = require('grommet/components/SearchInput');
var Example = require('../Example');
var A11y = require('../../utils/a11y');

var FormFieldDoc = React.createClass({
  componentDidMount: function () {
    A11y.updatePageTitle('Form Field');
  },

  render: function() {
    var inline = [
      "<FormField label=\"Item 1\" htmlFor=\"item1\">",
      "  <input id=\"item1\" />",
      "</FormField>"].join("\n");
    return (
      <DocsArticle title="FormField" colorIndex="neutral-3">

        <p>A field in a web form.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
          <dt><code>error     {"{text|node}"}</code></dt>
          <dd>Validation errors.</dd>
          <dt><code>help      {"{text|node}"}</code></dt>
          <dd>Helpful text.</dd>
          <dt><code>htmlFor   {"{id}"}</code></dt>
          <dd>Id of the input element that the label should be associated with.</dd>
          <dt><code>label     {"{text|node}"}</code></dt>
          <dd>Label for the field.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <Example name="Text input" code={
            <FormField label="Item 1" htmlFor="item1">
              <input id="item1" type="text" />
            </FormField>
          } />

          <Example name="Text input with errors" code={
            <FormField label="Item 1" htmlFor="item1" error="error text">
              <input id="item1" type="text" />
            </FormField>
          } />

          <Example name="Checkbox" code={
            <FormField label="">
              <CheckBox id="item2" label="Item 2" />
            </FormField>
          } />

          <Example name="Range" code={
            <FormField label="item 6" htmlFor="item6">
              <input id="item6" type="range" min="0" max="80" value="40" />
            </FormField>
          } />

          <Example name="RadioButton with help" code={
            <FormField label="item 3" help="help text">
              <RadioButton id="item3-1" label="choice 1" name="choice"/>
              <RadioButton id="item3-2" label="choice 2" name="choice"/>
            </FormField>
          } />

          <Example name="NumberInput" code={
            <FormField label="item 4" htmlFor="item4">
              <NumberInput id="item4" name="number" />
            </FormField>
          } />

          <Example name="SearchInput" code={
            <FormField label="item 5" htmlFor="item5">
              <SearchInput id="item5" value="This is a really long search value that keeps going and going. Wow it is really long!"/>
            </FormField>
          } />

        </section>

      </DocsArticle>
    );
  }
});

module.exports = FormFieldDoc;
