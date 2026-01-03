APP_COUNT = 25

apps = [
    {
        "id": i,
        "name": f"Application {i}",
        "arch": "32-bit"
    }
    for i in range(1, APP_COUNT + 1)
]
