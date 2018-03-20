module.exports = {
	"extends": "airbnb",
  "parser": "babel-eslint",
	"parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": 'module',
		"ecmaFeatures": {
			"jsx": true,
			"modules": true,
			"experimentalObjectRestSpread": true,
			"arrowFunctions":true
		}
	},
	"rules": {
		"semi": 0,
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "no-mixed-operators": ["error",
      {
        "groups": [
            ["+", "-", "*", "/", "%", "**"],
            ["&", "|", "^", "~", "<<", ">>", ">>>"],
            ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
            ["&&", "||"],
            ["in", "instanceof"]
        ],
        "allowSamePrecedence": true
      }
    ],
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }]
	},
  "plugins": [
    "jsx-a11y",
    "react"
  ],
};