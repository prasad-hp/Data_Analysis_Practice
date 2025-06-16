# Matplotlib & Seaborn Practice Questions - E-commerce Sales Dataset

## Dataset Overview
You'll be working with an e-commerce sales dataset containing 2000 transactions with the following columns:
- `transaction_id`: Unique transaction identifier
- `date`: Transaction date
- `category`: Product category (Electronics, Clothing, Books, etc.)
- `price`: Unit price of the product
- `quantity`: Number of items purchased
- `subtotal`: Price × Quantity
- `discount_percent`: Discount percentage applied
- `discount_amount`: Dollar amount of discount
- `total_amount`: Final amount after discount
- `customer_segment`: Premium, Regular, or Budget
- `region`: Geographic region (North, South, East, West, Central)
- `sales_channel`: Online, Retail Store, or Mobile App
- `customer_satisfaction`: Rating from 1-5
- `return_customer`: Boolean indicating if customer has purchased before
- `month`: Month number (1-12)
- `quarter`: Quarter (Q1-Q4)
- `day_of_week`: Day name (Monday-Sunday)
- `is_weekend`: Boolean indicating weekend transaction

---

## BASIC MATPLOTLIB QUESTIONS (Questions 1-15)

### 1. Basic Line Plot
Create a line plot showing total sales amount by month. Add proper title, axis labels, and grid.

### 2. Bar Chart
Create a bar chart showing total revenue by product category. Rotate x-axis labels if needed.

### 3. Histogram
Create a histogram of customer satisfaction scores with 10 bins. Add appropriate title and labels.

### 4. Scatter Plot
Create a scatter plot of price vs. customer satisfaction. Add a trend line using numpy.polyfit.

### 5. Multiple Subplots
Create a 2x2 subplot layout showing:
- Top left: Sales by region (bar chart)
- Top right: Quantity distribution (histogram)
- Bottom left: Price vs total_amount (scatter)
- Bottom right: Sales by day of week (bar chart)

### 6. Pie Chart
Create a pie chart showing the distribution of sales channels. Include percentages and explode the largest segment.

### 7. Box Plot
Create a box plot comparing total_amount across different customer segments.

### 8. Stacked Bar Chart
Create a stacked bar chart showing sales by region, with each bar divided by customer segment.

### 9. Time Series Plot
Create a time series plot showing daily total sales over time. Use date on x-axis.

### 10. Customized Styling
Recreate question 1 but with custom colors, line styles, markers, and a professional theme.

### 11. Error Bars
Create a bar chart of average satisfaction by category with error bars showing standard deviation.

### 12. Log Scale
Create a scatter plot of price vs quantity using a log scale for the price axis.

### 13. Secondary Y-axis
Create a plot with sales volume (left y-axis) and average price (right y-axis) by month.

### 14. Annotation
Create a scatter plot of price vs satisfaction and annotate the top 5 highest-priced transactions.

### 15. Custom Legend
Create a scatter plot colored by customer segment with a custom legend positioned outside the plot area.

---

## INTERMEDIATE MATPLOTLIB QUESTIONS (Questions 16-25)

### 16. 3D Scatter Plot
Create a 3D scatter plot with price, quantity, and satisfaction as the three axes.

### 17. Polar Plot
Create a polar plot showing sales by month (use month as angle, sales as radius).

### 18. Filled Areas
Create an area plot showing cumulative sales over time for each sales channel.

### 19. Custom Color Maps
Create a scatter plot of price vs satisfaction with points colored by total_amount using a custom colormap.

### 20. Multiple Y-axes
Create a plot with three different metrics on separate y-axes: total sales, average satisfaction, and transaction count by month.

### 21. Broken Axis
Create a bar chart of sales by category with a broken y-axis to handle outliers.

### 22. Dashboard Layout
Create a comprehensive dashboard with 6 different visualizations using GridSpec for custom layout.

### 23. Interactive Elements
Create a plot with clickable legend items that show/hide data series.

### 24. Custom Markers
Create a scatter plot using different marker shapes for each customer segment and sizes based on quantity.

### 25. Animation
Create an animated bar chart showing how sales by category change over quarters.

---

## BASIC SEABORN QUESTIONS (Questions 26-40)

### 26. Basic Distributions
Use `sns.histplot()` to show the distribution of total_amount with KDE overlay.

### 27. Categorical Plots
Create a box plot using `sns.boxplot()` showing satisfaction scores across different sales channels.

### 28. Correlation Heatmap
Create a correlation heatmap of all numerical variables using `sns.heatmap()`.

### 29. Pair Plot
Create a pair plot of price, quantity, satisfaction, and total_amount, colored by customer segment.

### 30. Count Plot
Use `sns.countplot()` to show the frequency of transactions by day of the week.

### 31. Strip Plot
Create a strip plot showing price distribution across different categories with jitter.

### 32. Violin Plot
Create violin plots comparing total_amount distributions across regions.

### 33. Point Plot
Use `sns.pointplot()` to show average satisfaction by category with confidence intervals.

### 34. Joint Plot
Create a joint plot of price vs total_amount with marginal distributions.

### 35. Facet Grid
Use `sns.FacetGrid()` to create separate scatter plots of price vs satisfaction for each customer segment.

### 36. Regression Plot
Create a regression plot of price vs total_amount using `sns.regplot()`.

### 37. Categorical Heatmap
Create a heatmap showing average satisfaction by category and region.

### 38. Swarm Plot
Use `sns.swarmplot()` to show satisfaction distribution by sales channel.

### 39. Bar Plot with Error Bars
Create a bar plot showing average total_amount by category with confidence intervals.

### 40. Distribution Comparison
Use `sns.distplot()` or `sns.histplot()` to compare satisfaction distributions between return and new customers.

---

## ADVANCED SEABORN QUESTIONS (Questions 41-60)

### 41. Multi-level Grouping
Create a grouped bar plot showing average sales by region and customer segment.

### 42. Custom Color Palettes
Recreate question 26 using a custom color palette that matches your company branding.

### 43. Statistical Annotations
Create box plots of total_amount by category and add statistical significance annotations.

### 44. Complex Heatmaps
Create a heatmap showing sales performance (rows: categories, columns: months) with custom annotations.

### 45. Ridge Plot
Create ridge plots (using multiple `sns.kdeplot()`) showing price distributions for each category.

### 46. Cluster Map
Use `sns.clustermap()` to create a clustered heatmap of correlations between numerical variables.

### 47. Time Series with Seaborn
Create a time series plot using seaborn showing sales trends with confidence bands.

### 48. Multi-panel Figure
Use `sns.FacetGrid()` to create a 2x3 grid showing satisfaction distributions for each sales channel and customer segment combination.

### 49. Custom Annotations
Create a correlation heatmap with custom annotations showing both correlation values and significance levels.

### 50. Advanced Pair Plot
Create a pair plot with custom diagonal plots (KDE instead of histograms) and off-diagonal regression lines.

### 51. Seasonal Decomposition Visualization
Decompose the time series into trend, seasonal, and residual components and visualize them.

### 52. Cohort Analysis Heatmap
Create a cohort analysis heatmap showing customer retention rates over time.

### 53. Funnel Analysis
Create a funnel chart showing conversion rates across different stages of the customer journey.

### 54. Geographic Heatmap
Create a simulated geographic heatmap showing sales intensity by region.

### 55. Customer Segmentation Visualization
Use multiple plots to visualize customer segments based on RFM analysis (Recency, Frequency, Monetary).

---

## INTEGRATION & STYLING QUESTIONS (Questions 56-70)

### 56. Matplotlib + Seaborn Hybrid
Combine matplotlib's flexibility with seaborn's statistical plotting in a single complex figure.

### 57. Custom Themes
Create and apply a custom seaborn theme that matches your organization's style guide.

### 58. Publication-Ready Plots
Create publication-quality plots with proper sizing, fonts, and formatting for academic papers.

### 59. Interactive Dashboard
Combine multiple visualizations into an interactive dashboard using matplotlib widgets.

### 60. Subplot Mosaic
Use matplotlib's subplot_mosaic to create a complex layout with different sized subplots.

### 61. Color Accessibility
Recreate any previous plot ensuring it's accessible to colorblind users.

### 62. Multi-language Support
Create plots with axis labels and titles in multiple languages.

### 63. Dynamic Legends
Create legends that automatically adjust based on the data being displayed.

### 64. Custom Error Visualization
Create custom error visualizations for business metrics with confidence intervals.

### 65. Comparative Analysis
Create side-by-side comparisons of the same data using different visualization techniques.

### 66. Performance Metrics Dashboard
Create a comprehensive business dashboard showing KPIs with appropriate chart types.

### 67. Storytelling with Data
Create a sequence of plots that tell a coherent story about customer behavior.

### 68. A/B Testing Visualization
Visualize A/B testing results with appropriate statistical indicators.

### 69. Anomaly Detection Visualization
Create plots that highlight anomalies or outliers in the sales data.

### 70. Comprehensive Report
Create a multi-page visual report combining all the techniques learned, suitable for executive presentation.

---

## BONUS CHALLENGES

### Challenge A: Real-time Dashboard
Create a dashboard that updates in real-time as new data points are added.

### Challenge B: Machine Learning Integration
Visualize the results of clustering algorithms applied to customer segments.

### Challenge C: Web Integration
Export your visualizations in formats suitable for web integration (SVG, interactive HTML).

### Challenge D: Mobile Optimization
Create responsive visualizations that work well on mobile devices.

### Challenge E: Automated Reporting
Create a system that automatically generates weekly/monthly visual reports.

---

## Getting Started Code Template

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime
import warnings
warnings.filterwarnings('ignore')

# Load the dataset
df = pd.read_csv('ecommerce_sales_data.csv')
df['date'] = pd.to_datetime(df['date'])

# Set style
plt.style.use('default')  # or try 'seaborn-v0_8', 'ggplot', etc.
sns.set_palette("husl")

# Your solution code here
```

## Tips for Success

1. **Start Simple**: Begin with basic plots and gradually add complexity
2. **Read Documentation**: Familiarize yourself with matplotlib and seaborn documentation
3. **Experiment**: Try different parameters and styling options
4. **Business Context**: Always consider what story your visualization tells
5. **Iterate**: Refine your plots based on feedback and best practices
6. **Save Your Work**: Keep a notebook with all your solutions for future reference

## Evaluation Criteria

For each visualization, consider:
- **Clarity**: Is the message clear?
- **Accuracy**: Does it represent the data correctly?
- **Aesthetics**: Is it visually appealing?
- **Functionality**: Does it serve its intended purpose?
- **Code Quality**: Clean, readable, well-commented code

Good luck with your matplotlib and seaborn journey!