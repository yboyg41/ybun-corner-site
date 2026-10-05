const url = new URL(window.location)

url.searchParams.set('lang', 'en')
history.replaceState({}, "", url)