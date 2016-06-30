$(".console").terminal({
	rebecca: function () {
		switch (new Date().getDay()) {
			case 4:
				this.echo("Happy Prebeccaday!");
				break;
			case 5:
				window.location = "https://www.youtube.com/watch?v=kfVsfOSbJY0";
				break;
			case 6:
				this.echo("Today is Saturday. And Sunday comes afterwards");
				break;
			default:
				var now = new Date();
				var then = new Date();
				then.setDate(now.getDate() + (7 + 5 - now.getDay()) % 7);

				var diff = then - now;

				term.echo("Only " + diff.getDate() + " days, " + diff.getHours() + " hours and " + diff.getMinutes() + " minutes left until Rebeccaday, OMG!");
				break;
		}
	},
	blog: function () {
		this.pause();
		window.location = "http://blog.kelunik.com/"
	},
	chat: function () {
		this.error("Sorry, the chat server has been suspended.");
	},
	contact: function () {
		this.echo("You can contact me (at) kelunik.com");
	},
	date: function () {
		this.echo(new Date().toISOString());
	},
	email: function () {
		this.echo("You can contact me (at) kelunik.com");
	},
	github: function () {
		this.pause();
		window.location = "https://github.com/kelunik"
	},
	mail: function () {
		this.echo("You can contact me (at) kelunik.com");
	},
	urlencode: function(str) {
		this.echo(encodeURIComponent(str));
	},
	urldecode: function(str) {
		this.echo(decodeURIComponent(str));
	},
	twitter: function () {
		this.pause();
		window.location = "https://twitter.com/kelunik"
	}
}, {
	greetings: "Welcome on kelunik.com\n\nJust type what you're looking for. Tab completion is available.\n",
	name: "kelunik.com",
	prompt: "kelunik.com $ "
});
