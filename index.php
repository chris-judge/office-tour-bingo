<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Office Tour BINGO!</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
	<main id="app" class="content-wrap">
		<div class="inner-wrap">
		<template v-if="board.length > 0">
			<h1>{{ title }}</h1>
			<div class="squares clearfix">
				<div class="square" v-for="(term,index) in board" v-if="term != 'FREE SPACE'" :data-index="index + 1" v-on:click.prevent="markSquare(index)"><p v-html="term"></p></div>
				<div class="square active active--lock" v-else :data-index="index + 1" v-on:click.prevent="markSquare(index)"><p><strong><span v-html="term"></span></strong></p></div>
			</div>
		</template>
		<template v-else>
			<p>Sorry, no terms were found!</p>
		</template>
		</div>
		<h2 class="reset"><a href="" v-on:click.prevent="resetBoard">Reset</a></h2>
	</main>
</body>
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.10/vue.min.js"></script>
<script src="scripts.js"></script>
</html>