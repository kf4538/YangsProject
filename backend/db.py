import psycopg2
from psycopg2.extras import RealDictCursor

def get_db_connection():
    conn = psycopg2.connect(
        host='localhost',
        database='postgres',
        user='postgres',
        password='postgres'
    )
    return conn

def query_db(query, params=None):
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(query, params)
            if query.strip().upper().startswith('SELECT'):
                result = cur.fetchall()
            else:
                conn.commit()
                result = cur.rowcount
    except Exception as e:
        result = str(e)
    finally:
        conn.close()
    return result
