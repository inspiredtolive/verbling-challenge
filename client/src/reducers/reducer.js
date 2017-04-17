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

export default function (state = {items: exampleItems, filter: ''}, action) {
  // reducers must be pure functions meaning that we should not modify any arguments
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case 'TOGGLE_COLLAPSE':
      newState.items[action.index].isCollapse = !newState.items[action.index].isCollapse;
      return newState;
    case 'EXPAND_ALL':
      newState.items = newState.items.map((item) => {
        item.isCollapse = false;
        return item;
      });
      return newState;
    case 'COLLAPSE_ALL':
      newState.items = newState.items.map((item) => {
        item.isCollapse = true;
        return item;
      });
      return newState;
    case 'TOGGLE_ALL':
      newState.items = newState.items.map((item) => {
        item.isCollapse = !item.isCollapse;
        return item;
      });
      return newState;
    case 'ADD_ITEM':
      newState.items.push({ text: action.text, isCollapse: true });
      return newState;
    case 'CHANGE_FILTER':
      newState.filter = action.filter;
      return newState;
    default:
      return state;
  }
}