<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>share2</title>
    <link href="style.css" rel="stylesheet" type="text/css">
</head>
  <body>

<h1>Question1</h1>

<form name=frm>
<div class="q1">
<input id="first" class="button" type="button" name="a" value="aaa" onClick="choice(1)" style="background:yellow"=>
<input id="secound" class="button"type="button" name="b" value="bbb" onClick="choice(2)" style="background:yellow"=>
<input id="third" class="button" type="button" name="c" value="ccc" onClick="choice(3)" style="background:yellow"=>
</div>
<form>


<h1>Question2</h1>

<div class="q2">
<input id="fourth" type="button" name="d" value="aaa" onClick="choice2(4)" style="background:yellow"=>
<input id="fifth"  type="button" name="e" value="bbb" onClick="choice2(5)" style="background:yellow"=>
<input id="sixth" type="button" name="f" value="ccc" onClick="choice2(6)" style="background:yellow"=>
</div>


<h1>Question3</h1>

<div class="q3">
<input id="seventh" type="button" name="g" value="aaa" onClick="choice3(7)" style="background:yellow"=>
<input id="eighth" type="button" name="i" value="bbb" onClick="choice3(8)" style="background:yellow"=>
<input id="ninth" type="button" name="k" value="ccc" onClick="choice3(9)" style="background:yellow"=>
</div>

<div class="mid">
<input type="button" value="mid" onClick="mid()">

</div>

<div class="result">
<input type="button" name="result" value="result" onClick="sendresult()">
</div>

<script src="script2.js"></script>

</body>
</html>
