# Coral Doctor

-- insert about / mission statement --

**Website**: [Coral Doctor](https://tropylium.github.io/coral_doctor/)

## Data Source

We used [Hawaiian Ko'a Card Coral Health Assessments](https://data.noaa.gov/dataset/dataset/hawaiian-koa-card-coral-health-assessments1) data to help clasify the bleaching level of coral in in the ocean based on factors like depth and a color score based on a 
coral health assessment tool. The tool devloped by the Coral Reef Ecology Lab of the Hawaii Institute of Marine Biology helps identify the color of coral
and assign it a score. This color data is extremely powerful in understanding the bleach percentage of the coral.

## Predictive Models

![Color and Bleaching Percentage](bleach_pct_prediction/color_bleach_pct.png?raw=true "Title")

The above figure displays the count of coral at various color scores with indication of bleaching level. After plotting this data, we employed **Ordinal
Probit Regression** and **Logistic Regression** to predict coral bleaching levels with **~75% accuracy**. 

We had some issues implementing other classification algorithms,such as a Gradient-Boosted Tree. We might have been overfitting our data because of a 
smaller dataset or because the dataset had a low amount of features. The dataset we used was limited, as the other larger data sets were private.

## Contributors

Sreevatsa Nukala, Areeb Alam, Aileen Liao, Alex Dang
