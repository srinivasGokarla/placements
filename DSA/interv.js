const students = [
    {name: string, last_name: string, roll_no: integer }
    ]

    students.filter((e) => e.roll_no <= 15 ).map((e) => e.first_name + ' ' + e.last_name)