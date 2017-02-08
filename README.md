# meteor-error

Port of the Meteor.Error class from Meteor.

## Usage

```js
import * as Meteor from '@share911/meteor-error'

throw new Meteor.Error(500, 'Internal server error')
```

or

```js
import { Error as MeteorError } from '@share911/meteor-error'

throw new MeteorError(500, 'Internal server error')
```

[Full documentation](https://docs.meteor.com/api/methods.html#Meteor-Error)
