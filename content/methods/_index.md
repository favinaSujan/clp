---
title: Methods
displaytitle: Linking Methods
date: 2019-02-24T00:00:00.000Z
description: null
blockquote: Our linking methods aim to make as few false matches as possible
  (minimize type I errors) while creating as many of the true matches as
  possible (minimize type II errors).
---
Figure 1 shows a comparison of different linking methods according to their type I and type II errors.

![Chart comparing type I and type II linking errors resulting from different linking methods provided here.](/uploads/link_methods.png)

This figure refers to a series of linking methods currently used or soon to be added to this project (e.g., the ABE method, machine learning method, and EM method). Details of these linking methods can be found in the paper <a target="_blank" href="https://scholar.princeton.edu/sites/default/files/lboustan/files/nber_automated_linking.pdf">“Automated Linking of Historical Data”</a> by Ran Abramitzky, Leah Platt Boustan, Katherine Eriksson, James J. Feigenbaum, and Santiago Pérez. The crosswalks also include links shared by collaborators (<a target="_blank" href="https://www.sciencedirect.com/science/article/abs/pii/S0014498321000024">Joseph Price, Kasey Buckles, Jacob Van Leewen and Isaac Riley, 2019</a>) 

Each method involves a tradeoff between the number of matches made and the accuracy of the matches (TPR vs PPV). Methods with a lower PPV create more mis-matches. Mis-matches arise due to challenges such as transcription and enumeration errors, mortality<sup>1</sup>, under-enumeration, common names and international migration between census years. The figure also documents that mis-matches occur in linked datasets created by human linkers. Because the weight placed on sample size versus accuracy may differ based on the research question, we urge users to familiarize themselves with the methods and select the linking algorithm that best fits with their research design. 

A set of codes and documentation that can be used to implement each of these methods can be downloaded from our data page or found at <a target="_blank" href="https://ranabr.people.stanford.edu/matching-codes">this website</a>. These codes are also available as a <a target="_blank" href="https://github.com/historical-record-linking/matching-codes">GitHub repository</a>. 

<hr>

<p class="footnote"><sup>1</sup> Missed links due to mortality will be a larger problem when linking between two Censuses conducted a number of years apart (i.e. matching from the 1850 Census to 1940 Census) and so links created over a long time span should be used with caution.</p>