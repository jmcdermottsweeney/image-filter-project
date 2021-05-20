## Project Summary

Create a page that allows users to select a destination from a form. Selectable destinations are filtered from a list of categories based on the season chosen by the user. Once selected, the destination is displayed below the form.

## Design Specifications

All of the design specifications are included in design > index.html.

Design Guidelines:
* On page load (and before selection), the form fields should contain placeholders (season, category, destination).
* While the form `<select>` element should be styled, you may use the native browser styles for dropdown menu containing the `<option>` elements (shown on click).
* If in doubt, choose the path that leads towards clean design and good UX

## Data & Logic Requirements

Form Fields:
* Season - spring, summer, autumn, winter
* Category - only include categories valid for the season
* Destination - only include destinations valid for the selected category

Logic Guidelines:
* Any form field that cannot yet be toggled should be disabled. For example, we may want to disable the destination field prior to the user's selection of a category.
* If a field is changed out-of-order, page elements should be updated accordingly. For example, if user changes the category after selecting a destination, some form inputs should be cleared. 
* Changing the destination and submitting the form should update the destination image and title. If no destination is specified, the image and title area can be hidden.