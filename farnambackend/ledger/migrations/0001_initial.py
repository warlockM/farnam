# Generated by Django 4.1.4 on 2022-12-26 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Decision',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('index', models.IntegerField()),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('state', models.CharField(max_length=200)),
                ('context', models.CharField(max_length=200)),
                ('problem_statement', models.DecimalField(decimal_places=2, max_digits=10)),
                ('variables', models.CharField(max_length=200)),
                ('complications', models.CharField(max_length=200)),
                ('range_of_outcomes', models.CharField(max_length=200)),
                ('expectations', models.CharField(max_length=200)),
                ('probability', models.CharField(max_length=200)),
                ('outcome', models.CharField(max_length=200)),
                ('review_date', models.DateField()),
            ],
        ),
    ]