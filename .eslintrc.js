module.exports = {
	"extends": "airbnb",
	"parserOptions": {
		"ecmaVersion": 8,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"rules": {
		"semi": 0,
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
	}
};