const exampleItems = [
  { text: 'Item area should be scrollable with a fixed width of 400px and a height of 400px.',
    isCollapse: true, },
  { text: 'UI Should include an "Add" button that prompts user for input (can use window.prompt) and adds a new list item to the top of the list.',
    isCollapse: true },
  { text: 'List items should have a height of 50px when closed, and a variable height that fits to item content when expanded.',
    isCollapse: true },
  { text: 'When a list item is closed, the contained text should be truncated with an ellipsis. (ex: Truncat...)',
    isCollapse: true },
  { text: 'The search bar should suggest a filtered subset of the available list items that have text that matches the search string in either the title or the item body.',
    isCollapse: true },
  { text: 'List items should be clickable, toggling a list item\'s expanded/collapsed state.',
    isCollapse: true },
  { text: 'UI should include an "Expand all" button should expand all list items',
    isCollapse: true },
  { text: 'UI should include a "Collapse all" button should collapse all list items',
    isCollapse: true },
];

export default function (state = exampleItems, action) {
  switch (action.type) {
    case 'TOGGLE_COLLAPSE':
      let newState = JSON.parse(JSON.stringify(state));
      newState[action.index].isCollapse = !newState[action.index].isCollapse;
      return newState;
    default:
      return state;
  }
}