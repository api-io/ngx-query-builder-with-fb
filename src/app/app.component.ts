import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  VERSION,
} from '@angular/core';
import { QueryBuilderConfig, RuleSet } from 'ngx-angular-query-builder';

interface Between {
  start: string;
  end: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() name = 'Angular ' + VERSION.major;

  @Input() query = {
    root: true,
    condition: 'and',
    rules: [
      {
        condition: 'or',
        rules: [
          { field: 'age', operator: '=', value: 4 },
          { field: 'age', operator: '>', value: 20 },
        ],
      },
      {
        condition: 'and',
        rules: [{ field: 'gender', operator: '=', value: 'f' }],
      },
    ],
  };

  @Input() config: QueryBuilderConfig = {
    addRuleSet: this.addRuleSet.bind(this),
    fields: {
      UID: {
        name: 'All Accounts',
        type: 'all-accounts',
        defaultValue: 'is not null',
        operators: ['is not null'],
      },
      age: { name: 'Age', type: 'number' },
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          { name: 'Male', value: '' },
          { name: 'Female', value: 'f' },
        ],
      },
      foo: {
        name: 'Foo',
        type: 'object',
        operators: ['between', 'less', 'bigger'],
        defaultValue: [],
      },
    },
  };

  onQueryBuilderChange($event) {
    console.log($event);
  }

  log(event?: any): void {
    console.log(event);
  }

  addRuleSet(parent?: RuleSet): void {
    parent.rules = parent.rules.concat([
      {
        condition: 'and',
        rules: [{ field: 'UID', operator: 'is not null' }],
      },
    ]);
  }
}
