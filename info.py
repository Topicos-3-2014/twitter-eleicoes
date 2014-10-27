from json import JSONDecoder
from functools import partial
import json


def json_parse(fileobj, decoder=JSONDecoder(), buffersize=2048):
    buffer = ''
    for chunk in iter(partial(fileobj.read, buffersize), ''):
         buffer += chunk
         while buffer:
             try:
                 result, index = decoder.raw_decode(buffer)
                 yield result
                 buffer = buffer[index:]
             except ValueError:
                 # Not enough data to decode, read more
                 break

totaltweets_aecio = 0
totaltweets_dilma = 0

with open('aecio.json', 'r') as infh:
    for data in json_parse(infh):
        totaltweets_aecio += len(data)
        status_texts = [status['text'] for status in data]
        screen_names = [user_mention['screen_name']
            for status in data
                for user_mention in status['entities']['user_mentions']]
        hashtags = [hashtag['text']
            for status in data
                for hashtag in status['entities']['hashtags']]

        words = [w
            for t in status_texts
                for w in t.split()]

        from collections import Counter

        from prettytable import PrettyTable

        for label, data in (('Palavra', words),
                  ('Nome de usuario', screen_names),
                  ('Hashtag', hashtags)):
            pt = PrettyTable(field_names=[label, 'Contador'])
            c = Counter(data)
            [pt.add_row(kv) for kv in c.most_common()[:10]]
            pt.align[label], pt.align['Count'] = 'l','r'
            print pt
        break

with open('dilma.json', 'r') as infh:
    for data in json_parse(infh):
        totaltweets_dilma += len(data)
        status_texts = [status['text'] for status in data]
        screen_names = [user_mention['screen_name']
            for status in data
                for user_mention in status['entities']['user_mentions']]
        hashtags = [hashtag['text']
            for status in data
                for hashtag in status['entities']['hashtags']]

        words = [w
            for t in status_texts
                for w in t.split()]

        from collections import Counter

        from prettytable import PrettyTable

        for label, data in (('Palavra', words),
                  ('Nome de usuario', screen_names),
                  ('Hashtag', hashtags)):
            pt = PrettyTable(field_names=[label, 'Contador'])
            c = Counter(data)
            [pt.add_row(kv) for kv in c.most_common()[:10]]
            pt.align[label], pt.align['Count'] = 'l','r'
            print pt
        break

print "Total Tweets Aecio: ", totaltweets_aecio
print "Total Tweets Dilma: ", totaltweets_dilma

