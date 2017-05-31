import { TodoAppsPage } from './app.po';

describe('todo-apps App', () => {
  let page: TodoAppsPage;

  beforeEach(() => {
    page = new TodoAppsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
