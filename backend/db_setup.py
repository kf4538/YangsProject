import psycopg2

def run_sql_file(filename):
    conn = psycopg2.connect(
        host='localhost',
        database='postgres',
        user='postgres',
        password='postgres'
    )
    with conn.cursor() as cur:
        with open(filename, 'r') as file:
            cur.execute(file.read())
        conn.commit()
    conn.close()

if __name__ == '__main__':
    run_sql_file('setup.sql')
