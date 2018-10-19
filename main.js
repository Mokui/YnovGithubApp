var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    users: [{"username":"klklklk"}, {"username": "okokokokok"}],
    
  },
  created: function() 
  {
    $.getJSON( "data.json", function( json ) {
      this.users = json;
      console.log( "my users: " + JSON.stringify(this.users));
      
    })
  },
  methods: {

  },
  computed: {
    finalUsers: function() { console.log("COMPUTED: "+this.users);
      return null;
    }
  },
})

/* var sel = document.getElementById('comptepanel');
var userSelected = sel.value;
userSelected = userSelected.substring(0, userSelected.indexOf('('));
console.log(userSelected); */

/* 
new Vue({
  el: '#compte',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.github.com/users/')
      .then(response => (this.info = response))
  }
}) */