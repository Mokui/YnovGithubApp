var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    users: [],
    userSelected: 'Mokui',
    infos: [],
    projectName: 'github-ynov-vue' ,
    dateCommits : [],
    myListDate: ''    
  },
  created: function()
  {
    vm = this;
    $.getJSON( "data.json", function( json ) {
      vm.users = json;
      // console.log("my users: " + JSON.stringify(vm.users));
      
    });
  },
  methods: {
    getSelectedUser : function() {
      vm = this;
      // console.log("User: "+vm.userSelected);
      
      axios
        .get(`https://api.github.com/repos/${vm.userSelected}/github-ynov-vue/commits`)
        .then(response => (vm.infos = response.data));
    },
    getSelectedProject : function () {
      vm = this;
      // console.log("Repo: "+ vm.projectName);
      
      axios
        .get(`https://api.github.com/repos/${vm.userSelected}/${vm.projectName}/commits`)
        .then(response => (vm.infos = response.data));
    },
    getSelectedDate : function () {
      vm = this;
      console.log(vm.dateCommits);
     axios
        .get(`https://api.github.com/repos/${vm.userSelected}/${vm.projectName}/commits?&since=${vm.dateCommits}`)
        .then(response => (vm.infos = response.data));
    },
  },
  computed: {
    
  },
})