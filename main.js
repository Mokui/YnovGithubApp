var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    users: [{"username":"klklklk"}, {"username": "okokokokok"}],
    
  },
  created: function() 
  {
    vm = this;
    $.getJSON( "data.json", function( json ) {
      vm.users = json;
      console.log( "my users: " + JSON.stringify(vm.users));
      
    })
  },
  methods: {

  },
  computed: {

  },
})