import twitter
import json

# Garantindo acesso ao OAUTH .. Conta de Francisco Macário
CONSUMER_KEY = 'iWtuCXWErkI4wFdqDp4YQEa7k'
CONSUMER_SECRET = 'MSray61hiGIccDQKxBUy11kdsfDQreaTcb0MSHpkyy7BOX73Ew'
OAUTH_TOKEN = '264293667-47KpzoI7ZmCGMSWD42oBtw7M4HAbm4kVs5FIbLhr'
OAUTH_TOKEN_SECRET = 'hgmTmTUH8q48qWANAA21VgAQMfPowMizI0Adq5Y9yo7nA'

auth = twitter.oauth.OAuth(OAUTH_TOKEN, OAUTH_TOKEN_SECRET, CONSUMER_KEY, CONSUMER_SECRET)

twitter_api = twitter.Twitter(auth = auth)

queryD = 'Dilma13'
queryA = 'Aecio45'
count = 100
language = 'pt'
search_results_dilma = twitter_api.search.tweets(q = queryD, c = count, lang = language)
search_results_aecio = twitter_api.search.tweets(q=queryA, c = count, lang = language)

statuses_dilma = search_results_dilma['statuses']
statuses_aecio = search_results_aecio['statuses']

next_results_dilma = search_results_dilma['search_metadata']['next_results']
next_results_aecio = search_results_aecio['search_metadata']['next_results']

req = 1

while (req < 182):

	f_dilma = open('dilma.json', 'a')
	f_aecio = open('aecio.json', 'a')
	f_dilma.write(str(json.dumps(statuses_dilma, indent=1)))
	f_aecio.write(str(json.dumps(statuses_aecio, indent=1)))

	kwargs_dilma = dict([kv.split('=') for kv in next_results_dilma[1:].split("&")])
	kwargs_aecio = dict([kv.split('=') for kv in next_results_aecio[1:].split("&")])

	search_results_dilma = twitter_api.search.tweets(**kwargs_dilma)
	search_results_aecio = twitter_api.search.tweets(**kwargs_aecio)
	statuses_dilma = search_results_dilma['statuses']
	statuses_aecio = search_results_aecio['statuses']
	try:
		next_results_dilma = search_results_dilma['search_metadata']['next_results']
	except KeyError, e1:
		print "Dilma: ", e1
		break
	try:
		next_results_aecio = search_results_aecio['search_metadata']['next_results']
	except KeyError, e2:
		print "Aecio: ", e2
		break

	print "Req Num. : ", req
	req = req + 1
