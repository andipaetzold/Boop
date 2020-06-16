/**
	{
		"api":1,
		"name":"Sort Descending",
		"description":"Sorts the lines descending.",
		"author":"andipaetzold",
		"icon":"metamorphose",
		"tags":"sort,descending,desc"
	}
**/

function main(input) {

	input.text = input.text
		.split('\n')
		.sort((a, b) => b.localeCompare(a))
		.join('\n')

}
