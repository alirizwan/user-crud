import Users from './Users';

function init(models: Object) {
  return {
    Users: Users.init(models)
  };
}

export default {init};