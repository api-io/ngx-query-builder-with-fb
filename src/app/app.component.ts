import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  VERSION,
} from '@angular/core';
import {
  QueryBuilderConfig,
  RuleSet,
  QueryBuilderClassNames,
} from 'ngx-angular-query-builder';

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
        condition: 'and',
        rules: [AllAccountsRule],
      },
    ],
  };

  @Input() config: QueryBuilderConfig = {
    addRuleSet: this.addRuleSet.bind(this),
    fields: {
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
      UID: {
        name: 'uid',
        type: 'all-accounts',
        operators: ['is not null'],
        defaultOperator: 'is not null',
      },
    },
  };

  // getClassNames(...args): string {
  //   const clsLookup = this.classNames
  //     ? this.classNames
  //     : this.defaultClassNames;
  //   const classNames = args
  //     .map((id) => clsLookup[id] || this.defaultClassNames[id])
  //     .filter((c) => !!c);
  //   return classNames.length ? classNames.join(' ') : null;
  // }

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
        rules: [AllAccountsRule],
      },
    ]);
  }
}
const AllAccountsRule = {
  field: 'UID',
  operator: 'is not null',
};
