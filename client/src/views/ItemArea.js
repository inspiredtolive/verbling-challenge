import React from 'react';
import Item from './Item.js';

const exampleItems = [
  'Item area should be scrollable with a fixed width of 400px and a height of 400px.',
  'UI Should include an "Add" button that prompts user for input (can use window.prompt) and adds a new list item to the top of the list.',
  'List items should have a height of 50px when closed, and a variable height that fits to item content when expanded.',
  'When a list item is closed, the contained text should be truncated with an ellipsis. (ex: Truncat...)',
  'The search bar should suggest a filtered subset of the available list items that have text that matches the search string in either the title or the item body.',
  'List items should be clickable, toggling a list item\'s expanded/collapsed state.',
  'UI should include an "Expand all" button should expand all list items',
  'UI should include a "Collapse all" button should collapse all list items',
];

export default class ItemArea extends React.Component {

  render() {
    return (
      <div className="itemArea">
        {exampleItems.map((body, i) => <Item key={i} body={body}/> )}
      </div>
    );
  }

}
