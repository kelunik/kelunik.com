$(".console").terminal({
	base64: {
		encode: function (str) {
			this.echo(btoa(str));
		},
		decode: function (str) {
			this.echo(atob(str));
		}
	},
	base64url: {
		encode: function (str) {
			this.echo(btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ""));
		},
		decode: function (str) {
			this.echo(atob(str.replace(/-/g, "+").replace(/_/g, "/")));
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

				var diff = new Date(then - now);
				var days = Math.ceil((then.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

				this.echo("Only " + days + " days, " + diff.getHours() + " hours and " + diff.getMinutes() + " minutes left until Rebeccaday, OMG!");
				break;
		}
	},
	url: {
		encode: function (str) {
			this.echo(encodeURIComponent(str));
		},
		decode: function (str) {
			this.echo(decodeURIComponent(str));
		}
	},
	twitter: function () {
		this.pause();
		window.location = "https://twitter.com/kelunik"
	}
}, {
	greetings: "Welcome on kelunik.com\n\nJust type what you're looking for. Tab completion is available.\n",
	name: "kelunik.com",
	prompt: "$ "
});
