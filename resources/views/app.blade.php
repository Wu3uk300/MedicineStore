<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Medicine Store</title>

</head>
<body>
    <div id="app"></div>
</body>

@viteReactRefresh
@vite(['resources/sass/app.scss', 'resources/js/index.jsx'])
</html>
