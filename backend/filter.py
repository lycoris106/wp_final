import argparse
import json
import re

def get_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', default='layer1.json', type=str)
    parser.add_argument('--output', default='recipe.json', type=str)

    return parser.parse_args()

def main ():
    args = get_args()

    with open(args.input, 'r', encoding="utf-8") as rf, open(args.output, 'w', encoding="utf-8") as wf:
        cnt = 0
        for line in rf:
            match = re.findall('\{[\S\s]*\}', line)
            if not match:
                wf.write(line[0])
            else:
                print(cnt)
                data = json.loads(match[0])
                json.dump({
                        'id': data['id'],
                        'title': data['title'],
                        'url': data['url'],
                        'ingredients': [ingredient['text'] for ingredient in data['ingredients']],
                        'instructions': [instruction['text'] for instruction in data['instructions']],
                    }, wf
                )
                wf.write(',')
                cnt += 1
            wf.write('\n')

if __name__ == "__main__":
    main()