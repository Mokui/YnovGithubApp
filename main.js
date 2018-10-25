var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    users: [],
    userSelected: '',
    infos: 'Please select something',
    commitsFound: '', 
  },
  created: function()
  {
    vm = this;
    $.getJSON( "data.json", function( json ) {
      vm.users = json;
      //console.log("my users: " + JSON.stringify(vm.users));
      
    })
  },
  methods: {
    getSelectedUser : function() {
      vm = this;
      //console.log("User: "+vm.userSelected);
      
      axios
        .get(`https://api.github.com/repos/${vm.userSelected}/github-ynov-vue/commits`)
        .then(response => (vm.infos = response.data));
    },
    getSelectedProject : function (repoName) {
      vm = this;
      console.log("Repo: "+ repoName);
      
      axios
        .get(`https://api.github.com/repos/${vm.userSelected}/${repoName}/commits`)
        .then(response => (vm.infos = response.data));
    }
  },
  computed: {
    
  }
})