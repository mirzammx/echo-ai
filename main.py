import os
import subprocess
import random
from datetime import datetime, timedelta

# Filename inside the repo to update
filename = "commit_log.txt"  # Make sure this file exists

start_date = datetime(2024, 7, 1)
num_days = 5

for i in range(num_days):
    commit_date = start_date + timedelta(days=i)
    commits_today = random.randint(0, 3)

    for c in range(commits_today):
        with open(filename, "a") as f:
            f.write(f"Commit #{c+1} for {commit_date.strftime('%Y-%m-%d')}\n")

        subprocess.run(["git", "add", filename])

        commit_time = commit_date + timedelta(minutes=c)
        date_str = commit_time.strftime('%Y-%m-%dT%H:%M:%S')

        env = os.environ.copy()
        env["GIT_AUTHOR_DATE"] = date_str
        env["GIT_COMMITTER_DATE"] = date_str

        commit_message = f"Commit #{c+1} for {commit_date.strftime('%Y-%m-%d')}"
        subprocess.run(["git", "commit", "-m", commit_message], env=env)

# Push commits (adjust branch name if needed)
subprocess.run(["git", "push", "origin", "main"])

print("Done committing and pushing random commits for the first 5 days of July.")
